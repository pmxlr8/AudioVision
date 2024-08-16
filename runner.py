import subprocess
import argparse

def create_batch_file(video_url, m1op_video_path, user_id):
    # Define the batch file content with placeholders
    batch_content = f"""@echo off

    REM Activate the conda environment
    call conda activate deoldify

    REM Change to the target directory
    cd /d C:\\Users\\dhruv\\OneDrive\\Desktop\\AMD\\DeOldify\\DeOldify

    REM Run the Python script with arguments
    python VideoColorizer.py "{video_url}" "{user_id}"

    REM Activate the conda environment
    call conda activate base_new

    REM Change to the target directory
    cd /d C:\\Users\\dhruv\\OneDrive\\Desktop\\AMD\\Real-ESRGAN

    REM Run the Python script with arguments
    python upscaled_video_new_paths.py --video_path "{m1op_video_path}" --user_id "{user_id}"

    EXIT

    """

    # Specify the batch file path
    batch_file_path = r"C:\Users\dhruv\OneDrive\Desktop\AMD"
    batch_file_path += "\\" + f"run_{user_id}.bat"

    # Write the batch file content to the file
    with open(batch_file_path, "w") as batch_file:
        batch_file.write(batch_content)

    print(f"Batch file created: {batch_file_path}")
    return batch_file_path

def run_batch_file(batch_file_path):
    try:
        # Run the batch file
        subprocess.run(batch_file_path, shell=True, check=True)
        print("Batch file executed successfully.")
    except subprocess.CalledProcessError as e:
        print(f"Error occurred while executing batch file: {e}")

if __name__ == "__main__":
    # Parse command-line arguments
    parser = argparse.ArgumentParser(description="Run Video Colorizer with specific video URL and user ID.")
    parser.add_argument("--video_url", required=True, help="The URL of the video to be colorized.")
    parser.add_argument("--user_id", required=True, help="The user ID associated with the operation.")
    args = parser.parse_args()
    m1op_video_path = r"C:\Users\dhruv\OneDrive\Desktop\AMD\DeOldify\DeOldify\video\result"+"\\"+args.user_id+"_m1.mp4"

    # Create the batch file
    batch_file_path = create_batch_file(args.video_url, m1op_video_path, args.user_id)

    # Run the batch file
    run_batch_file(batch_file_path)
