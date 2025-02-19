(() => {

    // Example:
    // Files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
        { id: 3, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flagged );

    // Bad
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Good
    class User { };
    interface User {};


    // TODO: Homework
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const daysElapsed: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;
    
    // primer nombre - first name
    const firstName = 'John';
    
    // primer apellido - last name
    const lastName = 'Doe';

    // días desde la última modificación - days since modification
    const daysSinceModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;

    // Good
    const fruitNames = ['apple','pineapple','orange','banana'];

    const isOpen = true;
    const canWrite = true;
    const hasFruit = true;
    const isActive = false;
    const hasValues = false;
    const isEmpty = false;

    const minFruits = 1;
    const totalFruits = 3;
    const totalOfCars = 5;

})();



