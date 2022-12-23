import Election from "../Schema/Election";

export const getElections = async () => {
  const result = await Election.find()
    .populate("positions.candidates.student")
    .populate("college");
  return result.map((data: any) => ({
    ...data._doc,
    positions: data.positions.map((d: any) => ({
      ...d._doc,
      position: data._doc.college.positions.find(
        ({ _id }: any) => _id.str === d._doc.position.str
      ),
    })),
  }));
};
