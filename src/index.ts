import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Parent } from './entity/parent';
import { Child } from './entity/child';
import { expect } from 'chai';

(async function () {
  const connection = await createConnection();

  const parentRepository = connection.manager.getRepository(Parent);

  const testChild = new Child();
  testChild.age = 10;
  testChild.name = 'name';

  const testParent = new Parent();
  testParent.child = testChild;

  await parentRepository.save(testParent);

  let testParentLoaded = await parentRepository.findOne({ id: testParent.id });

  await parentRepository.merge(testParentLoaded, { child: { age: 20 } });

  await parentRepository.save(testParentLoaded);

  testParentLoaded = await parentRepository.findOne({ id: testParent.id });

  expect(testParentLoaded.child.age).to.equal(20);
})();