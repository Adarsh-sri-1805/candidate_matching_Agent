const axios = require("axios");

const aiShortlist = async (job, candidates) => {

    try {

        const prompt = `

Job Requirements:

Required Skills:
${job.requiredSkills.join(", ")}

Minimum Experience:
${job.minExperience}

Preferred Skills:
${job.preferredSkills?.join(", ") || "None"}

Candidates:

${candidates.map((c,index)=>`

${index+1})

Name:${c.name}

Skills:${c.skills.join(", ")}

Experience:${c.experience}

Bio:${c.bio || "N/A"}

Projects:
${c.projects?.join(", ") || "N/A"}

`).join("\n")}

Return ONLY valid JSON.

Format:

{
    "topCandidates":[
        {
            "name":"",
            "reason":"",
            "score":""
        }
    ]
}

No markdown.
No extra text.

`;

        const response = await axios.post(

            "https://openrouter.ai/api/v1/chat/completions",

            {

                model:"openai/gpt-oss-20b",

                messages:[
                    {
                        role:"user",
                        content:prompt
                    }
                ]

            },

            {

                headers:{

                    Authorization:
                    `Bearer ${process.env.OPENROUTER_API_KEY}`,

                    "Content-Type":"application/json"

                }

            }

        );

        const aiText =
        response.data
        .choices[0]
        .message
        .content;

        const parsedData =
        JSON.parse(aiText);

        return parsedData;

    }

    catch(error){

        console.log(
            error.response?.data ||
            error.message
        );

        throw new Error(
            error.response?.data?.error?.message ||
            error.message
        );

    }

};

module.exports=aiShortlist;