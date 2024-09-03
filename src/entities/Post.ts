import { Entity } from '@mikro-orm/core';
import {PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Book {

  @PrimaryKey()
  id!: number;
  @Property()
  createdAt = new Date();

  @Property()
  updatedAt = new Date();

  @Property()
  title!: string;



}