ARTIFACT=js-examples-browserify

all: build

.PHONY: build
build: node_modules
	@rm -rf build
	@mkdir build
	@cp src/*.html build/.
	@node_modules/.bin/browserify -r underscore -r ./src/my-module.js:my-module > build/bundle.js
	@node_modules/.bin/uglifyjs -nc ./build/bundle.js > build/bundle.min.js

.PHONY: checkstyle
checkstyle:
	@./node_modules/.bin/jshint src/*.js --config src/.jshintrc

.PHONY: clean
clean:
	@rm -rf build
	@rm -rf node_modules

node_modules:
	@npm install

