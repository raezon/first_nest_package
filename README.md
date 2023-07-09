# Publish Nest js module on npm.github

Welcome to the repository for our first Node module published as an npm package! This project is aimed at providing a template 
to publish a nest js module to npm.github

## Installation

To install the package, you need to have Node.js and npm (Node Package Manager) installed on your machine.

1. Set up your `.npmrc` file in your project directory or create one if it doesn't exist.

   Add the following content to the `.npmrc` file:
```
@raezon:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=xxx
```
2. Install the package using npm:

```shell
npm install @raezon/first_nest_package
```
3 Usage
Once the package is installed, you can import and use it in your Node.js project. Here's an example:
Import it on your module first 
```
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from '@raezon/first_nest_package';

@Module({
  imports: [TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```
than use the service
```
import { Controller, Get } from '@nestjs/common';
import { TestService } from '@raezon/first_nest_package';

@Controller()
export class AppController {
  constructor(private readonly appService: TestService) {}

  @Get()
  getHello(): string {
    return this.appService.findAll();
  }
}

```
Please refer to the package's documentation for detailed usage instructions and examples.

Contributing
We welcome contributions from the community! If you find any issues, have suggestions, or would like to contribute to the development of this package, please follow the guidelines outlined in CONTRIBUTING.md.

Let's embark on this exciting journey of creating and sharing powerful Node.js modules together!

Note: Make sure to replace the placeholder token (xxx) in the .npmrc file with your actual GitHub access token,
you can generate that token go to settings/Developer Settings/Personal Access Token/Token(classic)

🚀 Happy coding! 🎉
