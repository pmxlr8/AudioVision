# AUDIOVISION
## Project Demo Video

### Frontend Demo
[![AUDIOVISION Project Demo](https://img.youtube.com/vi/LwMpplrd3tk/0.jpg)](https://www.youtube.com/watch?v=LwMpplrd3tk)

### Backend Demo
[![AUDIOVISION Backend Demo](https://img.youtube.com/vi/IraxSfBxlTI/0.jpg)](https://www.youtube.com/watch?v=IraxSfBxlTI)

## Project Overview
AUDIOVISION is an app designed to deliver high-quality audio-visual experiences. This README provides the necessary steps to get the app up and running.

## Setup Instructions to start the app

### 1. Navigate to the Project Directory
```bash
  cd amd-app
```

### 2. Install dependencies
```bash
  yarn install
```

### 3. Setup the database
```bash
  cd packages/db
```
```bash
  npx prisma migrate dev
```
```bash
  npx prisma generate
```

### 4. Start the Development Server
```bash
  cd ../..
```
```bash
  yarn dev
```

## Additional Resources

### Model Files and Weights
You can find the model files and weights in the following Google Drive folder:
[Model Files and Weights](https://drive.google.com/drive/folders/12SiKDXkfB8ceBfgPLmSNn2_adk8nkJl9?usp=sharing)

## Instructions to Run the Backend

### 1. Change All Path Variables
Ensure all path variables in your project are correctly set to match your local environment.

### 2. Download Model Files
Download the model files of DeOldify, Real-ESRGAN, and SRVCGAN from the provided Google Drive folder.

### 3. Create Conda Environments and Install Dependencies
For each model (DeOldify, Real-ESRGAN, and SRVCGAN):
1. Create a Conda environment:
    ```bash
    conda create --name <env_name> python=3.x
    conda activate <env_name>
    ```
2. Install dependencies from the environment files and `requirements.txt`:
    ```bash
    conda env update --file path/to/env/file.yml
    pip install -r path/to/requirements.txt
    ```

### 4. Select the Model to Run
Choose which model you want to run for processing.

### 5. Execute the Runner Script
Run the `runner.py` file using the following command:
```bash
python path/to/runner.py --video_url https://video/url --user_id "user1924"
```
