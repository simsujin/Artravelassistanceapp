// Declaration file to satisfy TypeScript in editors for Supabase/Deno Edge functions.
// This provides a minimal ambient type for the `Deno.env.get()` usage found
// in the function source files. It's intentionally minimal so it doesn't
// conflict with real Deno typings.

declare const Deno: {
  env: {
    /**
     * Get an environment variable value. Returns `undefined` if not set.
     * Example: `Deno.env.get('PYTHON_API_URL')`
     */
    get(name: string): string | undefined;
  };
};
