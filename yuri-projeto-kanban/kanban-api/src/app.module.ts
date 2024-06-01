import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { AnotacoesModule } from './anotacoes/anotacoes.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL,
            autoLoadEntities: true,
            synchronize: true
        }),
        AutenticacaoModule, 
        AnotacoesModule, 
        UsuarioModule
]
})
export class AppModule {}
