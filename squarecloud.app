MAIN=next.config.ts
MEMORY=512
VERSION=recommended
DISPLAY_NAME=Mynex Hub
START=NODE_OPTIONS='--max-old-space-size=400' npm run build && npm run start
SUBDOMAIN=mynex
