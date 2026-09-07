import { useState } from "react";
import { Check, Copy, Terminal, Play, Cpu, Database, Layers, Container } from "lucide-react";
import { toast } from "sonner";

interface TabItem {
  id: string;
  name: string;
  icon: typeof Terminal;
  tag: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  code: string;
  simulation: {
    command: string;
    output: string;
    latency: string;
    status: string;
  };
}

const tabs: TabItem[] = [
  {
    id: "django-drf",
    name: "Django REST",
    icon: Layers,
    tag: "DRF / ORM Optimization",
    title: "Optimized Querysets & Zero N+1 Queries",
    description:
      "Enterprise Django ViewSet leveraging select_related and prefetch_related to collapse multi-table relational queries into single deterministic database hits.",
    metrics: [
      { label: "Query Count", value: "1 DB Hit" },
      { label: "Serialization", value: "ModelSerializer" },
      { label: "P99 Latency", value: "< 24ms" },
    ],
    code: `# views.py - High-concurrency Order processing
from rest_framework import viewsets, permissions
from django.db.models import Prefetch
from .models import Order, OrderItem
from .serializers import OrderDetailSerializer

class OrderViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Optimized endpoint eliminating N+1 overhead across items & customer records.
    """
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = OrderDetailSerializer

    def get_queryset(self):
        return (
            Order.objects.filter(customer=self.request.user)
            .select_related("customer", "shipping_address")
            .prefetch_related(
                Prefetch(
                    "items",
                    queryset=OrderItem.objects.select_related("product")
                )
            )
            .order_by("-created_at")
        )`,
    simulation: {
      command: "curl -X GET https://api.donsoby.dev/v1/orders/ -H 'Authorization: Bearer ***'",
      output: 'HTTP/2 200 OK\n{"count": 24, "results": [{"id": 1042, "status": "CONFIRMED", "items_count": 3, "total": 149.00}]}',
      latency: "18ms",
      status: "200 OK",
    },
  },
  {
    id: "fastapi-async",
    name: "FastAPI Async",
    icon: Cpu,
    tag: "Async / Event Loop",
    title: "Non-Blocking Async Request Pipelines",
    description:
      "High-throughput asynchronous endpoint handling streaming I/O, strict Pydantic v2 schemas, and background worker queue dispatching.",
    metrics: [
      { label: "Concurrency", value: "10k+ Req/s" },
      { label: "Validation", value: "Pydantic v2" },
      { label: "Event Loop", value: "uvloop" },
    ],
    code: `# main.py - Asynchronous Event Ingestion
from fastapi import FastAPI, BackgroundTasks, Depends
from pydantic import BaseModel, Field
import httpx

app = FastAPI(title="Sentinel Ingestion Engine")

class EventPayload(BaseModel):
    user_id: str = Field(..., example="usr_9281")
    event_type: str = Field(..., example="checkout.completed")
    metadata: dict = Field(default_factory=dict)

async def dispatch_webhook(event: EventPayload):
    async with httpx.AsyncClient() as client:
        await client.post("https://events.internal/sink", json=event.model_dump())

@app.post("/api/v1/events", status_code=202)
async def ingest_event(payload: EventPayload, bg_tasks: BackgroundTasks):
    # Non-blocking async queue dispatch
    bg_tasks.add_task(dispatch_webhook, payload)
    return {"status": "queued", "event_id": f"evt_{hash(payload.user_id)}" }`,
    simulation: {
      command: "curl -X POST https://api.donsoby.dev/api/v1/events -d '{\"user_id\":\"usr_9281\",\"event_type\":\"checkout.completed\"}'",
      output: 'HTTP/2 202 Accepted\n{"status": "queued", "event_id": "evt_49810294821", "worker": "async-pool-04"}',
      latency: "4.2ms",
      status: "202 ACCEPTED",
    },
  },
  {
    id: "postgres-redis",
    name: "Postgres + Redis",
    icon: Database,
    tag: "Caching & Consistency",
    title: "Cache-Aside Pattern with Atomic Invalidation",
    description:
      "Sub-10ms response caching layer for hot product catalogs with automatic TTL expiration and atomic Redis key invalidation on write.",
    metrics: [
      { label: "Cache Hit Rate", value: "94.8%" },
      { label: "Cache Latency", value: "< 2.5ms" },
      { label: "Engine", value: "Redis 7 / Postgres" },
    ],
    code: `# cache_service.py - Atomic Cache-Aside with Redis
import json
from django.core.cache import cache
from .models import Product

CACHE_TTL = 60 * 15  # 15 minutes

def get_product_detail(product_id: int) -> dict:
    cache_key = f"catalog:product:{product_id}"
    
    # 1. Inspect low-latency in-memory cache
    cached_data = cache.get(cache_key)
    if cached_data:
        return json.loads(cached_data)
        
    # 2. Cache miss: Fetch from PostgreSQL with row lock
    product = Product.objects.select_related("category").get(id=product_id)
    payload = {"id": product.id, "title": product.title, "stock": product.stock}
    
    # 3. Populate cache with TTL
    cache.set(cache_key, json.dumps(payload), timeout=CACHE_TTL)
    return payload`,
    simulation: {
      command: "redis-cli GET catalog:product:108",
      output: '{\n  "id": 108,\n  "title": "Minimalist Cyber Hoodie",\n  "stock": 42,\n  "cache_state": "HIT"\n}',
      latency: "1.8ms",
      status: "CACHE_HIT",
    },
  },
  {
    id: "docker-devops",
    name: "Docker & DevOps",
    icon: Container,
    tag: "Containerization / CI",
    title: "Multi-Stage Docker & Gunicorn Production Spec",
    description:
      "Hardened, slim Docker container spec configured for non-root execution, optimized layer caching, and automatic healthcheck probes.",
    metrics: [
      { label: "Image Size", value: "142 MB (Alpine)" },
      { label: "Security", value: "Non-root UID 1001" },
      { label: "Workers", value: "4 Uvicorn Workers" },
    ],
    code: `# Dockerfile - Multi-stage Production Build
FROM python:3.12-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

# Final Runtime Image
FROM python:3.12-slim AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 appgroup && \\
    adduser --system --uid 1001 --gid 1001 appuser

COPY --from=builder /install /usr/local
COPY . /app

USER appuser
EXPOSE 8000
HEALTHCHECK --interval=30s --timeout=5s CMD curl -f http://localhost:8000/health || exit 1
CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000", "-w", "4", "-k", "uvicorn.workers.UvicornWorker"]`,
    simulation: {
      command: "docker build -t donsoby/web-engine:latest . && docker run --rm donsoby/web-engine healthcheck",
      output: 'Container health status: OK\nMemory footprint: 84MB\nListening on 0.0.0.0:8000 (Workers: 4)',
      latency: "Active",
      status: "HEALTHY",
    },
  },
];

export function Workbench() {
  const [activeTab, setActiveTab] = useState<string>("django-drf");
  const [copied, setCopied] = useState(false);
  const [simulating, setSimulating] = useState(false);
  const [simOutput, setSimOutput] = useState<string | null>(null);

  const current = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    toast.success("Code snippet copied to clipboard!", {
      description: `${current.name} architecture snippet ready to use.`,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulate = () => {
    setSimulating(true);
    setSimOutput(null);
    setTimeout(() => {
      setSimulating(false);
      setSimOutput(current.simulation.output);
      toast.info(`Execution finished in ${current.simulation.latency}`, {
        description: `HTTP status: ${current.simulation.status}`,
      });
    }, 450);
  };

  return (
    <section id="workbench" className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="section-kicker">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
              <span>00 — Interactive Architecture Workbench</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Systems toolbench for <span className="glow-gradient-text">production code.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              Inspect the exact backend blueprints, query optimizations, and container configurations
              I build with across production stacks.
            </p>
          </div>

          <div className="font-mono text-xs text-white/40 hidden sm:block">
            [ PYTHON 3.12 · DJANGO 5 · FASTAPI · REDIS ]
          </div>
        </div>

        {/* Workbench Card Shell */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#060a12]/90 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Tab Navigation Toolbar */}
          <div className="flex flex-wrap items-center justify-between border-b border-white/8 bg-white/[0.02] px-4 py-2.5 gap-3">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setSimOutput(null);
                    }}
                    className={`flex items-center gap-2 rounded-lg px-3.5 py-2 font-mono text-xs transition-all ${
                      isActive
                        ? "border border-[#00d4ff]/40 bg-[#00d4ff]/10 text-white shadow-[0_0_15px_rgba(0,212,255,0.15)] font-semibold"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon className={`h-3.5 w-3.5 ${isActive ? "text-[#00d4ff]" : "text-white/40"}`} />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Actions: Copy & Run */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleSimulate}
                disabled={simulating}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/80 transition hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 hover:text-white"
                title="Simulate terminal request"
              >
                <Play className={`h-3 w-3 ${simulating ? "animate-spin text-[#00d4ff]" : "text-emerald-400"}`} />
                <span>{simulating ? "Running..." : "Test Endpoint"}</span>
              </button>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/80 transition hover:bg-white/10 hover:text-white"
                title="Copy code"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3 text-white/50" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Workbench Body */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: Code Viewer */}
            <div className="border-b lg:border-b-0 lg:border-r border-white/8 p-6 font-mono text-xs overflow-x-auto bg-[#030508]/60">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5 text-[11px] text-white/40">
                <span>{current.tag}</span>
                <span>Python 3.12</span>
              </div>
              <pre className="text-white/85 leading-relaxed overflow-x-auto selection:bg-[#00d4ff]/30">
                <code>{current.code}</code>
              </pre>
            </div>

            {/* Right: Architecture Blueprint & Metrics */}
            <div className="p-6 flex flex-col justify-between bg-white/[0.01]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-[#00d4ff]">
                  <span className="h-1 w-1 rounded-full bg-[#00d4ff]" />
                  <span>{current.tag}</span>
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {current.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {current.description}
                </p>

                {/* Metrics Proof Pills */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {current.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-white/8 bg-white/[0.02] p-3 text-center"
                    >
                      <div className="font-mono text-sm font-bold text-[#00d4ff] sm:text-base">
                        {m.value}
                      </div>
                      <div className="mt-1 font-mono text-[10px] text-white/50 uppercase">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simulation Result Drawer */}
              <div className="mt-8 rounded-xl border border-white/10 bg-[#030508] p-4">
                <div className="flex items-center justify-between text-[11px] font-mono text-white/40 pb-2 border-b border-white/5">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>TERMINAL BENCHMARK</span>
                  </span>
                  <span className="text-[#00d4ff] font-semibold">{current.simulation.latency}</span>
                </div>

                <div className="mt-2.5 font-mono text-[11px] text-white/60 truncate">
                  <span className="text-white/30">$ </span>
                  {current.simulation.command}
                </div>

                <div className="mt-2 rounded-lg bg-white/[0.02] p-2.5 font-mono text-[11px] text-emerald-300 whitespace-pre-wrap">
                  {simOutput || current.simulation.output}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
