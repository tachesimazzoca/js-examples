ARTIFACT=preload

all: build

.PHONY: build
build: node_modules checkstyle
	@install -d build/
	@rm -rf build/*
	@cp -R src/* build/.
	@./node_modules/.bin/uglifyjs -nc build/assets/js/$(ARTIFACT).js > build/assets/js/$(ARTIFACT).min.js

.PHONY: checkstyle
checkstyle: node_modules
	@./node_modules/.bin/jshint src/assets/js/*.js --config src/.jshintrc
	@./node_modules/.bin/jshint src/tests/unit/*.js --config src/.jshintrc

.PHONY: clean
clean:
	@rm -rf build/

node_modules:
	@npm install

