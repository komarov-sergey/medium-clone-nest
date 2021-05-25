import { ArticleEntity } from '@app/article/article.entity';

export type ArticleType = Omit<ArticleEntity, 'updateTimestamp'>;
