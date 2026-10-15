declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    TRACKER_EDITOR_EMAILS?: string;
    TRACKER_PASSWORD?: string;
    TRACKER_SESSION_SECRET?: string;
    BUCKET?: R2Bucket;
  }
}
