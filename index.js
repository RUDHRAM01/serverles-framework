const Test = require('./models/testModel'); 
const { connectToDatabase } = require('./db/db');
connectToDatabase();


const createTest = async (req, res) => {
  try {
        const name = req.name;
        const password = req.password;
        const test = await Test.create({ name, password });
      return {
        message: 'Test created successfully',
        test: test
        }
    } catch (error) {
      return {
        message: error.message
      }
    }
};


const getTests = async (req, res) => {
    try {
        const tests = await Test.findAll();
      return {
        message: tests
        }
    } catch (error) {
      return {
        message: error.message
      }
    }
};


const getTestById = async (req, res) => {
  try {
        const  id  = req.id;
        const test = await Test.findOne({
            where: { id: id }
        });
        if (test) {
          return {
            message: test
          }
        } else {
          return {
            message: 'Test not found'
          }
        }
    }
    catch (error) {
      return {
        message: error.message
      }
    }
}


const updateTest = async (req, res) => {
    try {
      const  id  = req.id;
      const name = req.name;
      const password = req.password;
        const test = await Test.findOne({
            where: { id: id }
        });
        if (test) {
            await test.update({ name, password });
          return {
            message: 'Test updated successfully',
            }
        } else {
          return {
            message: 'Test not found'
          }
        }
    }
    catch (error) {
      return {
        message: error.message
      }
    }
}


const deleteTest = async (req, res) => {
    try {
        const id  = req.id;
        const test = await Test.findOne({
            where: { id: id }
        });
        if (test) {
            await test.destroy();
            return {
                message: 'Test deleted successfully'
              };
        } else {
          return {
            message: 'Test not found'
          }
        }
    }
    catch (error) {
      return {
        message: error.message
      }
    }
}

module.exports = { createTest, getTests, getTestById, updateTest, deleteTest };