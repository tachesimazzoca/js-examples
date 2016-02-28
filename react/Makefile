ARTIFACT=js-examples-react

all: build

.PHONY: build
build: node_modules
	@rm -rf build
	@mkdir build
	@cp src/*.html build/.
	@node_modules/.bin/browserify -t [ babelify --presets [ react ] ] src/main.js > build/bundle.js
	@node_modules/.bin/uglifyjs -nc build/bundle.js > build/bundle.min.js

.PHONY: checkstyle
checkstyle:
	@./node_modules/.bin/jsxhint src/*.js --config src/.jshintrc

.PHONY: clean
clean:
	@rm -rf build
	@rm -rf node_modules

node_modules:
	@npm install

