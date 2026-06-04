import { getCalApi } from "@calcom/embed-react";
import { CAL_LINK } from "@/content/forge";

type CalApi = Awaited<ReturnType<typeof getCalApi>>;

let _cal: CalApi | null = null;

async function ensureCal(): Promise<CalApi> {
  if (_cal) return _cal;
  const cal = await getCalApi({ namespace: "forge" });
  cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
  _cal = cal;
  return cal;
}

export function initCal(): void {
  ensureCal();
}

export function openBooking(calLink: string = CAL_LINK): void {
  ensureCal().then((cal) => cal("modal", { calLink }));
}
