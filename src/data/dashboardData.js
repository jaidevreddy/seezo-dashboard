// ─── KPI CARDS ───────────────────────────────────────────────────────────────
export const kpiData = [
  {
    id: 1,
    label: "Total Alerts",
    value: "4,372",
    change: "+80%",
    positive: true,
  },
  {
    id: 2,
    label: "Critical Incidents",
    value: "1,142",
    change: "-30%",
    positive: false,
  },
  {
    id: 3,
    label: "Current Online",
    value: "6,359",
    change: "+86%",
    positive: true,
  },
]

// ─── FIREWALL ACTIVITY (Area Chart) ──────────────────────────────────────────
export const firewallData = [
  { time: "00:00", value: 12 },
  { time: "01:00", value: 8 },
  { time: "02:00", value: 5 },
  { time: "03:00", value: 3 },
  { time: "04:00", value: 7 },
  { time: "05:00", value: 15 },
  { time: "06:00", value: 42 },
  { time: "07:00", value: 118 },
  { time: "08:00", value: 210 },
  { time: "09:00", value: 285 },
  { time: "10:00", value: 340 },
  { time: "11:00", value: 410 },
  { time: "12:00", value: 390 },
  { time: "13:00", value: 320 },
  { time: "14:00", value: 275 },
  { time: "15:00", value: 430 },
  { time: "16:00", value: 395 },
  { time: "17:00", value: 350 },
  { time: "18:00", value: 290 },
  { time: "19:00", value: 240 },
  { time: "20:00", value: 180 },
  { time: "21:00", value: 145 },
  { time: "22:00", value: 95 },
  { time: "23:00", value: 60 },
]

// ─── ALERT VOLUME (Bar Chart) ─────────────────────────────────────────────────
export const alertVolumeData = [
  { month: "June", value: 420, highlight: false },
  { month: "July", value: 310, highlight: false },
  { month: "Aug",  value: 145, highlight: false },
  { month: "Sept", value: 510, highlight: true  },
  { month: "Oct",  value: 390, highlight: false },
  { month: "Dec",  value: 580, highlight: false },
]

// ─── BREAKDOWN (Multi-line Chart) ────────────────────────────────────────────
export const breakdownData = [
  { index: 0,  seriesA: 80,  seriesB: 40  },
  { index: 1,  seriesA: 55,  seriesB: 65  },
  { index: 2,  seriesA: 30,  seriesB: 80  },
  { index: 3,  seriesA: 20,  seriesB: 70  },
  { index: 4,  seriesA: 35,  seriesB: 50  },
  { index: 5,  seriesA: 60,  seriesB: 30  },
  { index: 6,  seriesA: 85,  seriesB: 20  },
  { index: 7,  seriesA: 95,  seriesB: 35  },
  { index: 8,  seriesA: 75,  seriesB: 55  },
  { index: 9,  seriesA: 50,  seriesB: 70  },
  { index: 10, seriesA: 30,  seriesB: 85  },
  { index: 11, seriesA: 20,  seriesB: 90  },
  { index: 12, seriesA: 40,  seriesB: 75  },
  { index: 13, seriesA: 65,  seriesB: 55  },
  { index: 14, seriesA: 80,  seriesB: 40  },
]

// ─── OPERATIONS (Lollipop Chart) ─────────────────────────────────────────────
export const operationsData = [
  { label: "01", min: 20, max: 75  },
  { label: "02", min: 35, max: 90  },
  { label: "03", min: 15, max: 60  },
  { label: "04", min: 40, max: 95  },
  { label: "05", min: 25, max: 70  },
  { label: "06", min: 50, max: 100 },
  { label: "07", min: 30, max: 85  },
  { label: "08", min: 10, max: 55  },
  { label: "09", min: 45, max: 88  },
  { label: "10", min: 20, max: 72  },
  { label: "11", min: 38, max: 92  },
  { label: "12", min: 28, max: 65  },
]

// ─── ALERT QUEUE (Table) ──────────────────────────────────────────────────────
export const alertQueueData = [
  {
    id: 1,
    time: "13:36 IST",
    alertId: "#SEZ-126",
    severity: "Customer-DB",
    status: "High",
    statusColor: "green",
    action: "In-Progress",
  },
  {
    id: 2,
    time: "13:36 IST",
    alertId: "#SEZ-127",
    severity: "Customer-DB",
    status: "High",
    statusColor: "green",
    action: "In-Line-Next",
  },
  {
    id: 3,
    time: "13:42 IST",
    alertId: "#SEZ-128",
    severity: "Auth-Service",
    status: "Urgent",
    statusColor: "red",
    action: "In-Progress",
  },
  {
    id: 4,
    time: "13:55 IST",
    alertId: "#SEZ-129",
    severity: "Customer-DB",
    status: "High",
    statusColor: "green",
    action: "Completed",
  },
  {
    id: 5,
    time: "14:02 IST",
    alertId: "#SEZ-130",
    severity: "API-Gateway",
    status: "Medium",
    statusColor: "yellow",
    action: "Pending",
  },
  {
    id: 6,
    time: "14:10 IST",
    alertId: "#SEZ-131",
    severity: "Storage-Node",
    status: "Low",
    statusColor: "blue",
    action: "Completed",
  },
]

// ─── NOTIFICATIONS ────────────────────────────────────────────────────────────
export const notificationsData = [
  { id: 1, text: "Critical alert on Customer-DB",  time: "2 min ago",  dot: "#ef4444" },
  { id: 2, text: "Firewall rule updated",           time: "10 min ago", dot: "#f59e0b" },
  { id: 3, text: "New user login detected",         time: "25 min ago", dot: "#7b7fdb" },
  { id: 4, text: "Alert #SEZ-126 resolved",         time: "1 hr ago",   dot: "#22c55e" },
]

// ─── USER ─────────────────────────────────────────────────────────────────────
export const userData = {
  name: "Seezo",
  role: "Security Admin",
  email: "admin@seezo.io",
}