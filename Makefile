setup:
	npm ci

build:
	tsc

watch:
	tsc -w

dailycheck:
	node dist/jobs/daily-check.js

weeklycheck:
	node dist/jobs/weekly-check.js 