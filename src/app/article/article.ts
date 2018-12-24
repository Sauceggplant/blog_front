import { Tag } from '../tag/tag';
import { Category } from '../category/category';

/**
 * 文章
 * @author zhaozixing
 * @date 2018-12-24
 * @version V1.0.0
 */
export class Article {
    /**
     * 主键
     */
    public title: string;
    /**
     * 内容
     */
    public content: string;
    /**
     * 创建时间
     */
    public createTime: string;
    /**
     * 作者
     */
    public author: string;
    /**
     * 标签
     */
    public tags: Tag[];
    /**
     * 分类
     */
    public category:Category;
  }
  