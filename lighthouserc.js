module.exports = {
  ci: {
    collect: {
      url: '[http://127.0.0.1:8000/'],
        startServerCommand: 'php artisan serve',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
