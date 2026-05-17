const Candidate = require("../models/candidate");

const matchCandidates = async (req, res) => {

    try {

        const {
            requiredSkills,
            minExperience,
            preferredSkills = []
        } = req.body;

        const candidates =
        await Candidate.find();

        const rankedCandidates =
        candidates.map(candidate => {

            let score = 0;

            // Required skill matching
            const matchedSkills =
            candidate.skills.filter(skill =>
                requiredSkills.includes(skill)
            );

            score +=
            (matchedSkills.length /
            requiredSkills.length) * 60;

            // Experience score
            if (
                candidate.experience >=
                minExperience
            ) {

                score += 30;

            }

            // Preferred skill bonus
            const matchedPreferred =
            candidate.skills.filter(skill =>
                preferredSkills.includes(skill)
            );

            if(preferredSkills.length>0){

                score +=
                (matchedPreferred.length/
                preferredSkills.length)*10;

            }

            let rank="Low";

            if(score>=80){

                rank="High";

            }

            else if(score>=50){

                rank="Medium";

            }

            return {

                ...candidate._doc,

                matchScore:
                score.toFixed(2),

                matchedSkills,

                rank

            };

        })

        .sort(
            (a,b)=>
            b.matchScore-a.matchScore
        );

        res.status(200).json(
            rankedCandidates
        );

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};

module.exports = {
    matchCandidates
};