import { Client } from '@notionhq/client'




export const submitForm = async (req, res) => {
    const {name, number, message} = req.body;
    const notion = new Client({auth: process.env.INTEGRATION_TOKEN});
    const databaseID = process.env.DatabaseID 

    try{
        const response = await notion.pages.create({
            parent: {database_id: databaseID},
            properties: {
                Name:{
                    title: [
                        {
                            text:{
                                content:  name
                            }
                        }
                    ]
                },
                "Phone ka number":{
                    rich_text: [
                        {
                            text:{
                                content:  number
                            }
                        }
                    ]
                },
                "sandesha":{
                    rich_text: [
                        {
                            text:{
                                content:  message
                            }
                        }
                    ]
                },
            }
        })
        console.log( "great success!!  ", response );
    }
    catch(err){
        console.log( err );
    }
}