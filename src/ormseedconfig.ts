import ormconfig from '@app/orm.config';

const ormseedconfig = {
  ...ormconfig,
  migrations: [__dirname, 'src/seeds/*.ts'],
  cli: {
    migrationDir: 'sr/seeds',
  },
};

export default ormseedconfig;
