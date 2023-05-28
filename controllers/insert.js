const { connection } = require("../config/db");

//////////////////////////////////////////////////////////////////////////////!
exports.insertPerson = async (req, res) => {
  const { id, fName, lName, address, city, country, email } = req.body;
  try {
    const person = await connection.query(
      `select * from person where person.idperson=${id}`,
      async (error, results, fields) => {
        if (error) {
          return res.status(500).json({ error: "Error executing query" });
        } else {
          if (results.length === 0) {
            await connection.query(
              `insert into person values ("${id}","${fName}","${lName}","${address}","${city}","${country}","${email}")`
            );
            return res
              .status(201)
              .json({ message: "Person inserted successfully" });
          }
          return res.status(400).json({
            error: `Person with id: ${id} already exists`,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////////////////////////////////!
exports.insertCourse = async (req, res) => {
  const { courseName, id } = req.body;
  try {
    await connection.query(
      `select * from person where person.idperson="${id}"`,
      async (error, results, fields) => {
        if (error) {
          return res
            .status(500)
            .json({ error: "Error executing query", error });
        }
        if (results.length === 0) {
          return res.status(400).json({
            error: `Person with id: ${id} does not exist`,
          });
        }
        //if exist proceed
        //check if project already exist
        await connection.query(
          `select * from course where course.courseName="${courseName}" and course.person_idperson="${id}"`,
          async (error, results, fields) => {
            if (error) {
              return res
                .status(500)
                .json({ error: "Error executing query", error });
            }
            //if not exist proceed
            if (results.length === 0) {
              await connection.query(
                `insert into course (\`courseName\`, \`person_idperson\`) values ("${courseName}","${id}")`
              );
              return res.send("course inserted successfully!");
            }
            return res.status(400).json({
              error: `Course with name: "${courseName}" already exists for this person`,
            });
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////////////////////////////////!
exports.insertProject = async (req, res) => {
  const { projectName, id } = req.body;
  try {
    //check if user exist
    await connection.query(
      `select * from person where person.idperson="${id}"`,
      async (error, results, fields) => {
        if (error) {
          return res
            .status(500)
            .json({ error: "Error executing query", error });
        }
        if (results.length === 0) {
          return res.status(400).json({
            error: `Person with id: ${id} does not exist`,
          });
        }
        //if exist proceed
        //check if project already exist
        await connection.query(
          `select * from project where project.projectName="${projectName}" and project.person_idperson="${id}"`,
          async (error, results, fields) => {
            if (error) {
              return res
                .status(500)
                .json({ error: "Error executing query", error });
            }
            //if not exist proceed
            if (results.length === 0) {
              await connection.query(
                `insert into project (\`projectName\`, \`person_idperson\`) values ("${projectName}","${id}")`
              );
              return res.send("project inserted successfully!");
            }
            return res.status(400).json({
              error: `Project with name: "${projectName}" already exists for this person`,
            });
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////////////////////////////////!
exports.insertHobby = async (req, res) => {
  const { hobbyName, id } = req.body;
  try {
    //check if user exist
    await connection.query(
      `select * from person where person.idperson="${id}"`,
      async (error, results, fields) => {
        if (error) {
          return res
            .status(500)
            .json({ error: "Error executing query", error });
        }
        if (results.length === 0) {
          return res.status(400).json({
            error: `Person with id: ${id} does not exist`,
          });
        }
        //if exist proceed
        //check if project already exist
        await connection.query(
          `select * from hobby where hobby.hobbyName="${hobbyName}" and hobby.person_idperson="${id}"`,
          async (error, results, fields) => {
            if (error) {
              return res
                .status(500)
                .json({ error: "Error executing query", error });
            }
            //if not exist proceed
            if (results.length === 0) {
              await connection.query(
                `insert into hobby (\`hobbyName\`, \`person_idperson\`) values ("${hobbyName}","${id}")`
              );
              return res.send("hobby inserted successfully!");
            }
            return res.status(400).json({
              error: `hobby with name: "${hobbyName}" already exists for this person`,
            });
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////////////////////////////////!
exports.insertApp = async (req, res) => {
  const { appName, id } = req.body;
  try {
    //check if user exist
    await connection.query(
      `select * from person where person.idperson="${id}"`,
      async (error, results, fields) => {
        if (error) {
          return res
            .status(500)
            .json({ error: "Error executing query", error });
        }
        if (results.length === 0) {
          return res.status(400).json({
            error: `Person with id: ${id} does not exist`,
          });
        }
        //if exist proceed
        //check if project already exist
        await connection.query(
          `select * from app where app.appName="${appName}" and app.person_idperson="${id}"`,
          async (error, results, fields) => {
            if (error) {
              return res
                .status(500)
                .json({ error: "Error executing query", error });
            }
            //if not exist proceed
            if (results.length === 0) {
              await connection.query(
                `insert into app (\`appName\`, \`person_idperson\`) values ("${appName}","${id}")`
              );
              return res.send("app inserted successfully!");
            }
            return res.status(400).json({
              error: `app with name: "${appName}" already exists for this person`,
            });
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////////////////////////////////!
exports.insertLanguage = async (req, res) => {
  const { languageName, id } = req.body;
  try {
    //check if user exist
    await connection.query(
      `select * from person where person.idperson="${id}"`,
      async (error, results, fields) => {
        if (error) {
          return res
            .status(500)
            .json({ error: "Error executing query", error });
        }
        if (results.length === 0) {
          return res.status(400).json({
            error: `Person with id: ${id} does not exist`,
          });
        }
        //if exist proceed
        //check if project already exist
        await connection.query(
          `select * from language where language.languageName="${languageName}" and language.person_idperson="${id}"`,
          async (error, results, fields) => {
            if (error) {
              return res
                .status(500)
                .json({ error: "Error executing query", error });
            }
            //if not exist proceed
            if (results.length === 0) {
              await connection.query(
                `insert into language (\`languageName\`, \`person_idperson\`) values ("${languageName}","${id}")`
              );
              return res.send("language inserted successfully!");
            }
            return res.status(400).json({
              error: `language with name: "${languageName}" already exists for this person`,
            });
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//////////////////////////////////////////////////////////////////////////////!
exports.insertSite = async (req, res) => {
  const { siteAddress, id } = req.body;
  try {
    //check if user exist
    await connection.query(
      `select * from person where person.idperson="${id}"`,
      async (error, results, fields) => {
        if (error) {
          return res
            .status(500)
            .json({ error: "Error executing query", error });
        }
        if (results.length === 0) {
          return res.status(400).json({
            error: `Person with id: ${id} does not exist`,
          });
        }
        //if exist proceed
        //check if project already exist
        await connection.query(
          `select * from site where site.siteAddress="${siteAddress}" and site.person_idperson="${id}"`,
          async (error, results, fields) => {
            if (error) {
              return res
                .status(500)
                .json({ error: "Error executing query", error });
            }
            //if not exist proceed
            if (results.length === 0) {
              await connection.query(
                `insert into site (\`siteAddress\`, \`person_idperson\`) values ("${siteAddress}","${id}")`
              );
              return res.send("site inserted successfully!");
            }
            return res.status(400).json({
              error: `site with address: "${siteAddress}" already exists for this person`,
            });
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
  }
};
