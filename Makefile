# Makefile: ATS Generate CV
PROJECT_NAME = ATS Generate CV
TAG = 1.0.0
LOCALE ?= en-US

setup:
	bun install && bunx playwright install

build:
	LOCALE=$(LOCALE) bun scripts/render.mjs

pdf:
	LOCALE=$(LOCALE) bun scripts/export-pdf.mjs

build-pt: LOCALE=pt-BR
build-pt: build

build-en: LOCALE=en-US
build-en: build

pdf-pt: LOCALE=pt-BR
pdf-pt: build pdf

pdf-en: LOCALE=en-US
pdf-en: build pdf

clean:
	rm -rf node_modules dist >/dev/null 2>&1 || true

help:
	@echo ""
	@echo "$(PROJECT_NAME) v$(TAG)"
	@echo "====================================="
	@echo ""
	@echo "Usage:"
	@echo "  make setup            Install dependencies"
	@echo "  make build-pt         Build CV in pt-BR"
	@echo "  make build-en         Build CV in en-US"
	@echo "  make pdf-pt           Generate PDF in pt-BR"
	@echo "  make pdf-en           Generate PDF in en-US"
	@echo "  make clean            Clean dist and node_modules"
	@echo ""
