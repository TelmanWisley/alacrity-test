import { TestEntity } from "../entities";
import { getTestRepository } from "../utils";

export const createItem = async (data: TestEntity): Promise<TestEntity | null> => {
  const testRepository = await getTestRepository();
  const item = new TestEntity();
  item.id = data.id;
  item.content = data.content;
  item.iv = data.iv;

  await testRepository.save(item);

  return item;
};

export const updateItem = async (data: TestEntity): Promise<TestEntity | null> => {
  const testRepository = await getTestRepository();
  const item = new TestEntity();
  item.id = data.id;
  item.content = data.content;
  item.iv = data.iv;
  const result: TestEntity | null = await testRepository.findOneBy({
    id: item.id,
  });
  if (result) {
    result.content = item.content;
    result.iv = item.iv;
    await testRepository.save(result);
  }
  return result;
};

export const getItemById = async (id: string): Promise<TestEntity | null> => {
  const testRepository = await getTestRepository();
  const item: TestEntity | null = await testRepository
    .createQueryBuilder("test")
    .select(["test.id", "test.content", "test.iv"])
    .where("test.id=:id", { id })
    .getOne();
  return item;
};
