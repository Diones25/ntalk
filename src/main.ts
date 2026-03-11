import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'node:path';

async function bootstrap() {
  // Definimos o tipo da aplicação como NestExpressApplication
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Define onde ficarão os arquivos públicos (CSS, JS, Imagens)
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // Define a pasta das views e o motor de renderização
  app.setBaseViewsDir(join(__dirname, '..', 'src/views'));
  app.setViewEngine('ejs');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
