const Test = require('./models/testModel'); 
const { connectToDatabase } = require('./db/db');
connectToDatabase();


const createTest = async (event) => {
  try {
        const name = event.body.name;
        const password = event.body.password;
        const test = await Test.create({ name, password });
        return {
          headers: {
            "Access-Control-Allow-Headers":
            "Content-Type,X-Amz-Date,Authorization,X-Api-Key,Cache-Control,X-Requested-With",
            "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: JSON.stringify(test)
        }
    } catch (error) {
      return {
        headers: {
          "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,Cache-Control,X-Requested-With",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        statusCode: 500,
        body: JSON.stringify(error.message)
      }
    }
};


const getTests = async (event) => {
    try {
        const tests = await Test.findAll();
        return {
          headers: {
            "Access-Control-Allow-Headers":
            "Content-Type,X-Amz-Date,Authorization,X-Api-Key,Cache-Control,X-Requested-With",
            "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: JSON.stringify(tests)
        }
    } catch (error) {
      return {
        headers: {
          "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,Cache-Control,X-Requested-With",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        statusCode: 500,
        body: JSON.stringify(error.message)
      }
    }
};


const getTestById = async (event) => {
  
  try {
        const  id  = event.pathParameters.id;
        const test = await Test.findOne({
            where: { id: id }
        });
        if (test) {
          return {
            headers: {
              "Access-Control-Allow-Headers":
              "Content-Type,X-Amz-Date,Authorization,X-Api-Key,Cache-Control,X-Requested-With",
              "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            statusCode: 200,
            body: JSON.stringify(test)
          }
        } else {
          return {
            headers: {
              "Access-Control-Allow-Headers":
              "Content-Type,X-Amz-Date,Authorization,X-Api-Key,Cache-Control,X-Requested-With",
              "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            statusCode: 400,
            body: JSON.stringify('test not found')
          }
        }
    }
    catch (error) {
      return {
        headers: {
          "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,Cache-Control,X-Requested-With",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        statusCode: 500,
        body: JSON.stringify(error.message)
      }
    }
}


const updateTest = async (event) => {
    try {
      const  id  = event.pathParameters.id;
      const name = event.body.name;
      const password = event.body.password;
        const test = await Test.findOne({
            where: { id: id }
        });
        if (test) {
            await test.update({ name, password });
            return {
              headers: {
                "Access-Control-Allow-Headers":
                "Content-Type,X-Amz-Date,Authorization,X-Api-Key,Cache-Control,X-Requested-With",
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
              statusCode: 200,
              body: JSON.stringify('test updated successfully')
            }
        } else {
          return {
            headers: {
              "Access-Control-Allow-Headers":
              "Content-Type,X-Amz-Date,Authorization,X-Api-Key,Cache-Control,X-Requested-With",
              "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            statusCode: 400,
            body: JSON.stringify('test not found')
          }
        }
    }
    catch (error) {
      return {
        headers: {
          "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,Cache-Control,X-Requested-With",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        statusCode: 500,
        body: JSON.stringify(error.message)
      }
    }
}


const deleteTest = async (event) => {
    try {
      const  id  = event.pathParameters.id;
        const test = await Test.findOne({
            where: { id: id }
        });
        if (test) {
            await test.destroy();
            return {
              headers: {
                "Access-Control-Allow-Headers":
                "Content-Type,X-Amz-Date,Authorization,X-Api-Key,Cache-Control,X-Requested-With",
                "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
              statusCode: 200,
              body: JSON.stringify('test deleted successfully')
            }
        } else {
          return {
            headers: {
              "Access-Control-Allow-Headers":
              "Content-Type,X-Amz-Date,Authorization,X-Api-Key,Cache-Control,X-Requested-With",
              "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
            },
            statusCode: 400,
            body: JSON.stringify('test not found')
          }
        }
    }
    catch (error) {
      return {
        headers: {
          "Access-Control-Allow-Headers":
          "Content-Type,X-Amz-Date,Authorization,X-Api-Key,Cache-Control,X-Requested-With",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        statusCode: 500,
        body: JSON.stringify(error.message)
      }
    }
}

module.exports = { createTest, getTests, getTestById, updateTest, deleteTest };