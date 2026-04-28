// ============================================
// XENON AIRDROP ULTIMATE - API CLIENT
// Ready for future backend integration
// ============================================

const API_BASE_URL = import.meta?.env?.VITE_API_URL || 'https://api.xenon-airdrop.com/v1';

// API Client class
class XenonAPI {
    constructor(baseUrl = API_BASE_URL) {
        this.baseUrl = baseUrl;
        this.token = localStorage.getItem('xenon_auth_token');
    }

    // Set auth token
    setToken(token) {
        this.token = token;
        if (token) {
            localStorage.setItem('xenon_auth_token', token);
        } else {
            localStorage.removeItem('xenon_auth_token');
        }
    }

    // Get headers
    getHeaders() {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        if (this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }
        return headers;
    }

    // Handle response
    async handleResponse(response) {
        if (!response.ok) {
            const error = await response.json().catch(() => ({ message: 'Network error' }));
            throw new Error(error.message || `HTTP ${response.status}`);
        }
        return response.json();
    }

    // GET request
    async get(endpoint) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'GET',
            headers: this.getHeaders()
        });
        return this.handleResponse(response);
    }

    // POST request
    async post(endpoint, data) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(data)
        });
        return this.handleResponse(response);
    }

    // PUT request
    async put(endpoint, data) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'PUT',
            headers: this.getHeaders(),
            body: JSON.stringify(data)
        });
        return this.handleResponse(response);
    }

    // DELETE request
    async delete(endpoint) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'DELETE',
            headers: this.getHeaders()
        });
        return this.handleResponse(response);
    }

    // ============ TASKS API ============
    
    // Get all tasks for user
    async getTasks(telegramId) {
        return this.get(`/tasks/${telegramId}`);
    }

    // Create new task
    async createTask(telegramId, taskData) {
        return this.post(`/tasks/${telegramId}`, taskData);
    }

    // Update task
    async updateTask(taskId, updates) {
        return this.put(`/tasks/${taskId}`, updates);
    }

    // Delete task
    async deleteTask(taskId) {
        return this.delete(`/tasks/${taskId}`);
    }

    // Get user stats
    async getStats(telegramId) {
        return this.get(`/stats/${telegramId}`);
    }

    // ============ AUTH API (future) ============
    
    // Login with Telegram
    async loginWithTelegram(telegramId, username) {
        return this.post('/auth/telegram', { telegram_id: telegramId, username });
    }

    // Verify session
    async verifySession() {
        return this.get('/auth/verify');
    }
}

// Create singleton instance
const xenonAPI = new XenonAPI();

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { XenonAPI, xenonAPI };
}

// Make available globally
window.xenonAPI = xenonAPI;

console.log('🌐 API Client ready - waiting for backend connection');
console.log('💡 To enable API mode, set API_BASE_URL in .env');
