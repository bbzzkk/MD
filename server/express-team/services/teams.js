const Team = require("../models/Team");
const Member = require("../models/Member");

exports.createTeam = async (teamname, description, userId, email) => {
  const team = await Team.create({
    teamname: teamname,
    ownerId: userId,
    description: description,
  });
  const member = await Member.create({
    teamId: team.teamId,
    userId: userId,
    role: "owner",
    status: "active",
    email: email,
  });
  if (team && member) {
    team.save();
    member.save();
  }
  return { teamId: team.teamId, memberId: member.memberId };
};

exports.getTeamByName = (teamname) =>
  Team.findOne({
    teamname: teamname,
  });

exports.getTeamById = (teamId) => Team.findOne({ teamId: teamId });

// Update description by teamId
exports.updateDescription = (teamId, description) =>
  Team.updateOne(
    { teamId: { $eq: teamId } },
    { $set: { description: description, updatedAt: Date.now() } },
    {
      upsert: false,
    }
  );

// Delete by teamId
exports.deleteTeam = async (teamId) =>
  await Team.findOneAndDelete({ teamId: teamId });
