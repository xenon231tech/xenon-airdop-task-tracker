.PHONY: help run clean deploy

help:
	@echo "Commands:"
	@echo "make run     - Jalankan di local"
	@echo "make clean   - Hapus cache"
	@echo "make deploy  - Deploy ke GitHub"

run:
	open index.html

clean:
	rm -rf .cache

deploy:
	git add .
	git commit -m "update"
	git push origin main
