// Enforce cost thresholds from the plan: per-job <= $5, monthly soft cap $20
const perJobUSD = Number(process.env.NEBIUS_LAST_JOB_EST_USD || '0');
const monthToDateUSD = Number(process.env.NEBIUS_MTD_USD || '0');

const PER_JOB_LIMIT = 5;
const MONTHLY_SOFT_CAP = 20;

let ok = true;
if (perJobUSD > PER_JOB_LIMIT) {
  console.error(`[policy] Per-job estimate $${perJobUSD.toFixed(2)} exceeds $${PER_JOB_LIMIT}. Approval required.`);
  ok = false;
}
if (monthToDateUSD > MONTHLY_SOFT_CAP) {
  console.error(`[policy] Month-to-date $${monthToDateUSD.toFixed(2)} exceeds soft cap $${MONTHLY_SOFT_CAP}. Halt exports/motion.`);
  ok = false;
}

if (!ok) {
  process.exit(1);
} else {
  console.log('[policy] Cost checks OK');
}


