ARTIFACT=preload

all: build

.PHONY: build
build: node_modules bower_components checkstyle
	@install -d build/
	@rm -rf build/*
	@cp -R src/* build/.
	@install -d build/lib/jquery
	@cp bower_components/jquery/jquery.min.js build/lib/jquery/jquery.min.js
	@./node_modules/.bin/uglifyjs -nc build/assets/js/$(ARTIFACT).js > build/assets/js/$(ARTIFACT).min.js

.PHONY: checkstyle
checkstyle: node_modules
	@./node_modules/.bin/jshint src/assets/js/*.js --config src/.jshintrc
	@./node_modules/.bin/jshint src/tests/unit/*.js --config src/.jshintrc

.PHONY: clean
clean:
	@rm -rf build/
	@rm -rf bower_components/

node_modules:
	@npm install

bower_components:
	@bower install
