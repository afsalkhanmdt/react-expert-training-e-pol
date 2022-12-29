import Election from "../Schema/Election";

export const createElection = async (election: any) => {
  const result = await Election.create(election);
  return result;
};
export const updateElection = async (id: any, election: any) => {
  const result = await Election.findByIdAndUpdate(id, election, {
    upsert: true,
    new: true,
  });
  return result;
};

export const getElectionByCollege = async (college: any) => {
  const result = await Election.find({ college })
    .populate("college")
    .populate("positions.candidates.student");
  return result.map((data: any) => ({
    ...data._doc,
    positions: data.positions.map((d: any) => ({
      ...d._doc,
      position: data._doc.college.positions.find(
        ({ _id }: any) => _id.toString() === d._doc.position.toString()
      ),
    })),
  }));
};
export const getElectionById = async (id: any) => {
  const result = await Election.findById(id);
  return result;
};

export const getOngoingElection = async (college: any) => {
  const data: any = await Election.findOne({
    college,
    status: "ongoing",
  })
    .populate("college")
    .populate("positions.candidates.student");
  return {
    ...data._doc,
    positions: data.positions.map((d: any) => ({
      ...d._doc,
      position: data._doc.college.positions.find(
        ({ _id }: any) => _id.toString() === d._doc.position.toString()
      ),
    })),
  };
};

export const addVoterToElection = async (id: any, voter: any) => {
  //check if voter has already voted
  const result = await Election.findOneAndUpdate(
    {
      _id: id,
      voters: { $ne: voter },
    },
    {
      $push: {
        voters: voter,
      },
    },
    {
      new: true,
    }
  );
  if (!result) {
    return false;
  }
  return result;
};
export const addCandidateVotes = async (id: any, votes: any) => {
  votes.forEach(async (element: any) => {
    const result = await Election.findOneAndUpdate(
      {
        _id: id,
        "positions.position": element.position,
      },
      {
        $inc: {
          "positions.$.candidates.$[candidate].votes": 1,
        },
      },
      {
        arrayFilters: [
          {
            "candidate.student": element.candidate,
          },
        ],
      }
    );
  });
};
