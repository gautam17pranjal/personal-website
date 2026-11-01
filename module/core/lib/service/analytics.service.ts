import {sendGAEvent} from "@next/third-parties/google";

// GA4 measurement ID, overridable per environment via NEXT_PUBLIC_GA_ID
export const GaMeasurementId = process.env.NEXT_PUBLIC_GA_ID ?? "G-ZWRYGRMQMQ";

// only track the deployed site so local development doesn't pollute the reports
export const isAnalyticsEnabled = process.env.NODE_ENV === "production" && GaMeasurementId !== "";

export type AnalyticsEvent =
    | "resume_click"
    | "project_click"
    | "company_click"
    | "social_click"
    | "theme_toggle";

export const trackEvent = (name: AnalyticsEvent, params: Record<string, string> = {}) => {
    if (!isAnalyticsEnabled) return;
    sendGAEvent("event", name, params);
}
