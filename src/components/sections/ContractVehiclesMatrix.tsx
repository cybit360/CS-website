"use client";

import { useState, useMemo } from "react";
import { Search, Filter, ChevronDown, ChevronUp, X } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

const contractVehiclesData = [
  {
    name: "GSA MAS",
    contractNumber: "GS-35F-0XXX",
    orderingAgency: "General Services Administration (GSA)",
    period: "2020 - 2025 (Option Years through 2030)",
    naicsCodes: ["541512", "541511", "541519", "518210"],
  },
  {
    name: "CIO-SP3",
    contractNumber: "HHSN316201XXXW",
    orderingAgency: "NIH NITAAC (Government-Wide)",
    period: "2018 - 2028",
    naicsCodes: ["541512", "541511", "541513", "541519"],
  },
  {
    name: "SEWP V",
    contractNumber: "NNG15SDXXB",
    orderingAgency: "NASA SEWP Program Office (Government-Wide)",
    period: "2015 - 2025 (Option Years through 2030)",
    naicsCodes: ["541512", "541519", "518210", "541330"],
  },
  {
    name: "DISA SETI",
    contractNumber: "HC1028-XX-D-0XXX",
    orderingAgency: "Defense Information Systems Agency (DISA)",
    period: "2021 - 2026 (Option Years through 2031)",
    naicsCodes: ["541512", "541330", "541611", "541690"],
  },
  {
    name: "Alliant 2",
    contractNumber: "47QTCA-XX-D-00XX",
    orderingAgency: "GSA Federal Acquisition Service (Government-Wide)",
    period: "2018 - 2023 (Option Years through 2028)",
    naicsCodes: ["541512", "541511", "541513", "541519", "541330", "541611"],
  },
];

const serviceDomains = [
  "Cybersecurity & Risk Management",
  "Cloud Computing & Virtualization",
  "Core IT Infrastructure, Networking & Operations",
  "Software Development & DevOps",
  "Data & Analytics",
  "AI & Automation",
  "Enterprise IT Services & Platforms",
  "Digital Transformation & Government IT",
  "Emerging & Next-Gen Technologies",
  "Industry-Specific IT",
];

type Tier = 1 | 2 | 3;

// Capabilities matrix: service domain index -> tier level
const capabilitiesMatrix: Record<number, Tier> = {
  0: 1, // Cybersecurity - Expert/Lead
  1: 1, // Cloud - Expert/Lead
  2: 1, // Core IT Infrastructure - Expert/Lead
  3: 1, // Software Dev & DevOps - Expert/Lead
  4: 2, // Data & Analytics - Proficient
  5: 2, // AI & Automation - Proficient
  6: 1, // Enterprise IT - Expert/Lead
  7: 2, // Digital Transformation - Proficient
  8: 3, // Emerging Tech - Supporting
  9: 2, // Industry-Specific - Proficient
};

const tierLabels: Record<Tier, string> = {
  1: "Expert / Lead",
  2: "Proficient",
  3: "Supporting",
};

const naicsCodesData = [
  { code: "541512", label: "Computer Systems Design Services" },
  { code: "541511", label: "Custom Computer Programming Services" },
  { code: "541513", label: "Computer Facilities Management Services" },
  { code: "541519", label: "Other Computer Related Services" },
  { code: "518210", label: "Data Processing, Hosting, and Related Services" },
  { code: "541330", label: "Engineering Services" },
  { code: "541611", label: "Administrative Management & General Management Consulting" },
  { code: "541690", label: "Other Scientific & Technical Consulting" },
];

/* ------------------------------------------------------------------ */
/*  SUB-COMPONENTS                                                     */
/* ------------------------------------------------------------------ */

function TierBadge({ tier }: { tier: Tier }) {
  const styles: Record<Tier, string> = {
    1: "bg-accent-cyan text-navy font-semibold",
    2: "bg-accent-cyan/30 text-navy font-medium",
    3: "bg-navy/10 text-steel font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs",
        styles[tier]
      )}
    >
      Tier {tier}: {tierLabels[tier]}
    </span>
  );
}

function TierCell({ tier }: { tier: Tier }) {
  const styles: Record<Tier, string> = {
    1: "bg-accent-cyan",
    2: "bg-accent-cyan/40",
    3: "bg-navy/15",
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <span
        className={cn("w-3 h-3 rounded-full shrink-0", styles[tier])}
        aria-hidden="true"
      />
      <span className="text-xs text-steel hidden lg:inline">
        {tierLabels[tier]}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 1: CONTRACT VEHICLES TABLE                                 */
/* ------------------------------------------------------------------ */

function ContractVehiclesTable() {
  const [vehicleFilter, setVehicleFilter] = useState("");
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (!vehicleFilter) return contractVehiclesData;
    const q = vehicleFilter.toLowerCase();
    return contractVehiclesData.filter(
      (v) =>
        v.name.toLowerCase().includes(q) ||
        v.orderingAgency.toLowerCase().includes(q) ||
        v.naicsCodes.some((c) => c.includes(q))
    );
  }, [vehicleFilter]);

  return (
    <div>
      {/* Filter bar */}
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
        <input
          type="text"
          placeholder="Filter by vehicle name, agency, or NAICS code..."
          value={vehicleFilter}
          onChange={(e) => setVehicleFilter(e.target.value)}
          className="w-full pl-10 pr-10 py-3 rounded-lg border border-border bg-white text-navy text-sm placeholder:text-steel/60 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
          aria-label="Filter contract vehicles"
        />
        {vehicleFilter && (
          <button
            onClick={() => setVehicleFilter("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-steel hover:text-navy"
            aria-label="Clear filter"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm" role="table">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left px-4 py-3 font-semibold">Vehicle</th>
              <th className="text-left px-4 py-3 font-semibold">Contract #</th>
              <th className="text-left px-4 py-3 font-semibold">
                Ordering Agency
              </th>
              <th className="text-left px-4 py-3 font-semibold">
                Period of Performance
              </th>
              <th className="text-left px-4 py-3 font-semibold">
                NAICS Codes
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((v, i) => (
              <tr
                key={v.name}
                className={cn(
                  "border-t border-border transition-colors",
                  i % 2 === 0 ? "bg-white" : "bg-cloud"
                )}
              >
                <td className="px-4 py-3 font-semibold text-navy">
                  {v.name}
                </td>
                <td className="px-4 py-3 text-steel font-mono text-xs">
                  {v.contractNumber}
                </td>
                <td className="px-4 py-3 text-steel">{v.orderingAgency}</td>
                <td className="px-4 py-3 text-steel">{v.period}</td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {v.naicsCodes.map((code) => (
                      <span
                        key={code}
                        className="inline-block px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan text-xs font-mono font-semibold"
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-steel"
                >
                  No contract vehicles match your filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {filtered.map((v, i) => (
          <div
            key={v.name}
            className="bg-white rounded-xl border border-border overflow-hidden"
          >
            <button
              onClick={() =>
                setExpandedRow(expandedRow === i ? null : i)
              }
              className="w-full flex items-center justify-between px-5 py-4 text-left"
              aria-expanded={expandedRow === i}
            >
              <span className="font-semibold text-navy">{v.name}</span>
              {expandedRow === i ? (
                <ChevronUp className="w-4 h-4 text-steel" />
              ) : (
                <ChevronDown className="w-4 h-4 text-steel" />
              )}
            </button>
            {expandedRow === i && (
              <div className="px-5 pb-5 space-y-3 text-sm">
                <div>
                  <span className="text-steel text-xs uppercase tracking-wider font-semibold">
                    Contract #
                  </span>
                  <p className="text-navy font-mono text-xs mt-0.5">
                    {v.contractNumber}
                  </p>
                </div>
                <div>
                  <span className="text-steel text-xs uppercase tracking-wider font-semibold">
                    Ordering Agency
                  </span>
                  <p className="text-navy mt-0.5">{v.orderingAgency}</p>
                </div>
                <div>
                  <span className="text-steel text-xs uppercase tracking-wider font-semibold">
                    Period of Performance
                  </span>
                  <p className="text-navy mt-0.5">{v.period}</p>
                </div>
                <div>
                  <span className="text-steel text-xs uppercase tracking-wider font-semibold">
                    NAICS Codes
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {v.naicsCodes.map((code) => (
                      <span
                        key={code}
                        className="inline-block px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan text-xs font-mono font-semibold"
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-steel py-8">
            No contract vehicles match your filter.
          </p>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 2: CAPABILITIES MATRIX                                     */
/* ------------------------------------------------------------------ */

function CapabilitiesMatrix() {
  const [tierFilter, setTierFilter] = useState<Tier | null>(null);

  const filteredDomains = useMemo(() => {
    return serviceDomains
      .map((name, index) => ({
        name,
        tier: capabilitiesMatrix[index],
        index,
      }))
      .filter((d) => (tierFilter ? d.tier === tierFilter : true));
  }, [tierFilter]);

  return (
    <div>
      {/* Legend + filter */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="text-sm font-semibold text-navy flex items-center gap-1.5">
          <Filter className="w-4 h-4" /> Filter by tier:
        </span>
        <button
          onClick={() => setTierFilter(null)}
          className={cn(
            "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
            !tierFilter
              ? "bg-navy text-white border-navy"
              : "bg-white text-steel border-border hover:border-navy hover:text-navy"
          )}
        >
          All
        </button>
        {([1, 2, 3] as Tier[]).map((t) => (
          <button
            key={t}
            onClick={() => setTierFilter(tierFilter === t ? null : t)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-medium border transition-colors",
              tierFilter === t
                ? "bg-navy text-white border-navy"
                : "bg-white text-steel border-border hover:border-navy hover:text-navy"
            )}
          >
            Tier {t} &mdash; {tierLabels[t]}
          </button>
        ))}
      </div>

      {/* Desktop grid */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm" role="table">
          <thead>
            <tr className="bg-navy text-white">
              <th className="text-left px-4 py-3 font-semibold w-1/2">
                Service Domain
              </th>
              <th className="text-center px-4 py-3 font-semibold">
                Capability Level
              </th>
              <th className="text-center px-4 py-3 font-semibold">
                Tier
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredDomains.map((d, i) => (
              <tr
                key={d.name}
                className={cn(
                  "border-t border-border transition-colors",
                  i % 2 === 0 ? "bg-white" : "bg-cloud"
                )}
              >
                <td className="px-4 py-3 font-medium text-navy">
                  {d.name}
                </td>
                <td className="px-4 py-3">
                  <TierCell tier={d.tier} />
                </td>
                <td className="px-4 py-3 text-center">
                  <TierBadge tier={d.tier} />
                </td>
              </tr>
            ))}
            {filteredDomains.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className="px-4 py-8 text-center text-steel"
                >
                  No domains match the selected tier.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {filteredDomains.map((d) => (
          <div
            key={d.name}
            className="bg-white rounded-xl border border-border p-5"
          >
            <h4 className="font-semibold text-navy text-sm mb-2">
              {d.name}
            </h4>
            <div className="flex items-center gap-3">
              <TierCell tier={d.tier} />
              <TierBadge tier={d.tier} />
            </div>
          </div>
        ))}
        {filteredDomains.length === 0 && (
          <p className="text-center text-steel py-8">
            No domains match the selected tier.
          </p>
        )}
      </div>

      {/* Summary row */}
      <div className="mt-6 flex flex-wrap gap-6 text-sm text-steel">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-accent-cyan" />
          <span>
            Tier 1: Expert/Lead ({serviceDomains.filter((_, i) => capabilitiesMatrix[i] === 1).length} domains)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-accent-cyan/40" />
          <span>
            Tier 2: Proficient ({serviceDomains.filter((_, i) => capabilitiesMatrix[i] === 2).length} domains)
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-navy/15" />
          <span>
            Tier 3: Supporting ({serviceDomains.filter((_, i) => capabilitiesMatrix[i] === 3).length} domains)
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SECTION 3: NAICS CODE LOOKUP                                       */
/* ------------------------------------------------------------------ */

function NaicsCodeLookup() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search) return naicsCodesData;
    const q = search.toLowerCase();
    return naicsCodesData.filter(
      (n) =>
        n.code.includes(q) || n.label.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div>
      {/* Search */}
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" />
        <input
          type="text"
          placeholder="Search by NAICS code or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-10 py-3 rounded-lg border border-border bg-white text-navy text-sm placeholder:text-steel/60 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 focus:border-accent-cyan"
          aria-label="Search NAICS codes"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-steel hover:text-navy"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((n) => {
          // Find which contract vehicles cover this NAICS
          const vehicles = contractVehiclesData
            .filter((v) => v.naicsCodes.includes(n.code))
            .map((v) => v.name);

          return (
            <div
              key={n.code}
              className="bg-white rounded-xl p-5 border border-border hover:border-accent-cyan/40 transition-colors"
            >
              <span className="text-2xl font-bold text-accent-cyan font-mono">
                {n.code}
              </span>
              <p className="text-sm text-navy font-medium mt-2 leading-relaxed">
                {n.label}
              </p>
              {vehicles.length > 0 && (
                <div className="mt-3 pt-3 border-t border-border">
                  <span className="text-xs text-steel uppercase tracking-wider font-semibold">
                    Available via
                  </span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {vehicles.map((v) => (
                      <span
                        key={v}
                        className="inline-block px-2 py-0.5 rounded bg-navy/5 text-navy text-xs font-medium"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-steel py-8">
          No NAICS codes match your search.
        </p>
      )}

      {/* Count */}
      <p className="text-xs text-steel mt-4">
        Showing {filtered.length} of {naicsCodesData.length} NAICS codes
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN EXPORTED COMPONENT                                            */
/* ------------------------------------------------------------------ */

export function ContractVehiclesMatrix() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Contract Vehicles", id: "vehicles" },
    { label: "Capabilities Matrix", id: "matrix" },
    { label: "NAICS Code Lookup", id: "naics" },
  ];

  return (
    <div>
      {/* Tab navigation */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="flex border-b border-border mb-8 overflow-x-auto"
      >
        {tabs.map((tab, index) => {
          const isActive = index === activeTab;
          return (
            <button
              key={tab.id}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTab(index)}
              onKeyDown={(e) => {
                let next = activeTab;
                if (e.key === "ArrowRight") next = (activeTab + 1) % tabs.length;
                else if (e.key === "ArrowLeft")
                  next = (activeTab - 1 + tabs.length) % tabs.length;
                else if (e.key === "Home") next = 0;
                else if (e.key === "End") next = tabs.length - 1;
                else return;
                e.preventDefault();
                setActiveTab(next);
                document.getElementById(`tab-${tabs[next].id}`)?.focus();
              }}
              className={cn(
                "relative whitespace-nowrap px-5 py-3 text-sm font-semibold transition-colors",
                "focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-cyan",
                isActive
                  ? "text-accent-cyan"
                  : "text-steel hover:text-navy"
              )}
            >
              {tab.label}
              {isActive && (
                <span
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-accent-cyan"
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab panels */}
      <div
        id="panel-vehicles"
        role="tabpanel"
        aria-labelledby="tab-vehicles"
        hidden={activeTab !== 0}
      >
        {activeTab === 0 && <ContractVehiclesTable />}
      </div>

      <div
        id="panel-matrix"
        role="tabpanel"
        aria-labelledby="tab-matrix"
        hidden={activeTab !== 1}
      >
        {activeTab === 1 && <CapabilitiesMatrix />}
      </div>

      <div
        id="panel-naics"
        role="tabpanel"
        aria-labelledby="tab-naics"
        hidden={activeTab !== 2}
      >
        {activeTab === 2 && <NaicsCodeLookup />}
      </div>
    </div>
  );
}
