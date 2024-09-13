// File: ecosystem.config.cjs
module.exports = {
	apps: [
		{
			name: 'deva-blog',
			script: 'npm',
			args: 'start',
			env: {
				NODE_ENV: 'production',
				PORT: 3010
			}
		}
	]
};
