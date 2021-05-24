setup:
	npm ci

build:
	tsc

watch:
	tsc -w

dailycheck:
	node dist/jobs/daily-check.js