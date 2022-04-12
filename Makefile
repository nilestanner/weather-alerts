setup:
	npm ci

build:
	npm run build

watch:
	tsc -w

morningcheck:
	node dist/jobs/morning-check.js

dailycheck:
	node dist/jobs/daily-check.js

weeklycheck:
	node dist/jobs/weekly-check.js 