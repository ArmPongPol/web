export const API_BASE_URL = "https://api-auth-production-c1e4.up.railway.app/api"

export async function apiFetch<T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<T> {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            ...(options.headers || {}),
        },
        ...options,
    });

    if (!res.ok) {
        const message = await res.text();
        throw new Error(`API Error ${res.status}: ${message}`);
    }

    return res.json();
}
