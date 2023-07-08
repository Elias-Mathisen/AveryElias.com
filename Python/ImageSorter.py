import os

def rename_images(directory):
    files = os.listdir(directory)
    image_files = [file for file in files if os.path.isfile(os.path.join(directory, file)) and file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif'))]
    image_files.sort()  # Sort the image files

    # Rename the images
    for i, filename in enumerate(image_files):
        extension = os.path.splitext(filename)[1]
        new_filename = f"image{i+1}{extension}"
        os.rename(os.path.join(directory, filename), os.path.join(directory, new_filename))

# Example usage
directory = '/Users/elias/Documents/Projects/HTML/Avery&Elias/Images/San Diego Zoo Safari Park'
rename_images(directory)
