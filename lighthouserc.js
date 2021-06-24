module.exports = {
  ci: {
    collect: {
      url: '[http://127.0.0.1:8000/'],
        startServerCommand: 'rails server -e production',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
