###Step 1:

Ensure you have ruby installed - If on windows, use [rubyinstaller] You will also need to install the RubyDevKit

###Step 2:

Open you favourite CLI in the root of the project

###Step 3:

Check whether you have Ruby 2.0.0 or higher installed

```sh
$ ruby -v
```

###Step 4:

Install bundler if you don't already have it installed

```sh
$ gem install bundler
```

###Step 5:

Install Jekyll and other dependencies

```sh
$ bundler install
```

###Step 6:

Install node modules

```sh
$ npm install
```

###Step 7:

Run the following command to build and watch the site

```sh
$ gulp watch
```


[rubyinstaller]: <http://rubyinstaller.org/>
