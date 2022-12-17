import agent from "../../../agent";

export async function getItemAndComments(id) {
  const item = await agent.Items.get(id);
  item.item.image = item.item.image || '/placeholder.png'
  const comments = await agent.Comments.forItem(id);

  return [item, comments];
}
