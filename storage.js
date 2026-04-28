// ============================================
// XENON AIRDROP ULTIMATE - STORAGE MANAGER
// ============================================

const STORAGE_KEYS = {
    TASKS: 'xenon_tasks',
    SETTINGS: 'xenon_settings',
    THEME: 'xenon_theme',
    BACKUP: 'xenon_backup',
    LAST_SYNC: 'xenon_last_sync'
};

// Storage Manager Class
class StorageManager {
    constructor() {
        this.storage = localStorage;
    }

    // Check if storage is available
    isAvailable() {
        try {
            const test = '__storage_test__';
            this.storage.setItem(test, test);
            this.storage.removeItem(test);
            return true;
        } catch (e) {
            console.error('LocalStorage is not available:', e);
            return false;
        }
    }

    // Get storage usage (approximate)
    getStorageUsage() {
        let total = 0;
        for (let i = 0; i < this.storage.length; i++) {
            const key = this.storage.key(i);
            const value = this.storage.getItem(key);
            total += (key.length + (value?.length || 0)) * 2; // UTF-16 ~2 bytes per char
        }
        return {
            used: total,
            max: 5 * 1024 * 1024, // 5MB
            percent: (total / (5 * 1024 * 1024)) * 100
        };
    }

    // ============ TASKS ============
    
    // Get all tasks
    getTasks() {
        const tasks = this.storage.getItem(STORAGE_KEYS.TASKS);
        return tasks ? JSON.parse(tasks) : [];
    }

    // Save tasks
    saveTasks(tasks) {
        this.storage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
        this.updateLastSync();
    }

    // Add a single task
    addTask(task) {
        const tasks = this.getTasks();
        tasks.unshift(task);
        this.saveTasks(tasks);
        return task;
    }

    // Update a task
    updateTask(taskId, updates) {
        const tasks = this.getTasks();
        const index = tasks.findIndex(t => t.id === taskId);
        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...updates };
            this.saveTasks(tasks);
            return tasks[index];
        }
        return null;
    }

    // Delete a task
    deleteTask(taskId) {
        const tasks = this.getTasks();
        const filtered = tasks.filter(t => t.id !== taskId);
        this.saveTasks(filtered);
        return filtered;
    }

    // Clear all tasks
    clearAllTasks() {
        this.storage.removeItem(STORAGE_KEYS.TASKS);
        return [];
    }

    // ============ SETTINGS ============
    
    // Get settings
    getSettings() {
        const settings = this.storage.getItem(STORAGE_KEYS.SETTINGS);
        return settings ? JSON.parse(settings) : {
            theme: 'dark',
            notifications: true,
            autoBackup: true,
            language: 'id'
        };
    }

    // Save settings
    saveSettings(settings) {
        this.storage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    }

    // Update a single setting
    updateSetting(key, value) {
        const settings = this.getSettings();
        settings[key] = value;
        this.saveSettings(settings);
        return settings;
    }

    // ============ THEME ============
    
    // Get theme preference
    getTheme() {
        return this.storage.getItem(STORAGE_KEYS.THEME) || 'dark';
    }

    // Save theme preference
    saveTheme(theme) {
        this.storage.setItem(STORAGE_KEYS.THEME, theme);
    }

    // ============ BACKUP ============
    
    // Create backup
    createBackup() {
        const backup = {
            version: '1.0',
            timestamp: new Date().toISOString(),
            tasks: this.getTasks(),
            settings: this.getSettings()
        };
        this.storage.setItem(STORAGE_KEYS.BACKUP, JSON.stringify(backup));
        return backup;
    }

    // Restore from backup
    restoreBackup() {
        const backup = this.storage.getItem(STORAGE_KEYS.BACKUP);
        if (backup) {
            const data = JSON.parse(backup);
            if (data.tasks) this.saveTasks(data.tasks);
            if (data.settings) this.saveSettings(data.settings);
            return data;
        }
        return null;
    }

    // Export all data as JSON
    exportAllData() {
        return {
            tasks: this.getTasks(),
            settings: this.getSettings(),
            theme: this.getTheme(),
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
    }

    // Import data from JSON
    importAllData(data) {
        if (data.tasks) this.saveTasks(data.tasks);
        if (data.settings) this.saveSettings(data.settings);
        if (data.theme) this.saveTheme(data.theme);
        return true;
    }

    // ============ META ============
    
    // Update last sync timestamp
    updateLastSync() {
        this.storage.setItem(STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
    }

    // Get last sync time
    getLastSync() {
        return this.storage.getItem(STORAGE_KEYS.LAST_SYNC);
    }

    // Clear all data
    clearAll() {
        Object.values(STORAGE_KEYS).forEach(key => {
            this.storage.removeItem(key);
        });
    }

    // Get stats about stored data
    getStats() {
        const tasks = this.getTasks();
        const completed = tasks.filter(t => t.status === 'done').length;
        const pending = tasks.length - completed;
        
        return {
            totalTasks: tasks.length,
            completedTasks: completed,
            pendingTasks: pending,
            completionRate: tasks.length === 0 ? 0 : (completed / tasks.length) * 100,
            storageUsage: this.getStorageUsage(),
            lastSync: this.getLastSync(),
            hasBackup: !!this.storage.getItem(STORAGE_KEYS.BACKUP)
        };
    }
}

// Create singleton instance
const storage = new StorageManager();

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { StorageManager, storage };
}

// Make available globally
window.storage = storage;

console.log('💾 Storage manager loaded - data persistence ready!');
console.log(`📊 Current stats: ${storage.getStats().totalTasks} tasks stored`);
