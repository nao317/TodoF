const API_BASE = process.env.NEXT_PUBLIC_API_BASE ?? "";

export async function apiFetch(path: string, init?: RequestInit) {
    const response = await fetch(`${API_BASE}${path}`, {
        headers: {
            "Content-Type": "application/json",
            ...(init?.headers ?? {}),
        },
        credentials: "include",
        ...init,
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`API error ${response.status}`);
    }

    const contentType = response.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
        return response.json();
    }

    return response.text();
}