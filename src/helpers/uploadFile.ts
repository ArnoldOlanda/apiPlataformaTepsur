/**
 * @summary authenticate with the storage service using a connection string
 */

import { BlobServiceClient } from "@azure/storage-blob";

export const uploadFile = (tempFilePath: string, containerName: string) => {
    try {
        const STORAGE_CONNECTION_STRING =
            process.env.STORAGE_CONNECTION_STRING || "";

        // Note - Account connection string can only be used in node.
        const blobServiceClient = BlobServiceClient.fromConnectionString(
            STORAGE_CONNECTION_STRING
        );
        const containerClient =
            blobServiceClient.getContainerClient(containerName);

        // const filename = "pdf_test.pdf";
        const nombreCortado = tempFilePath.split("\\");
        const blobName = nombreCortado[nombreCortado.length - 1];
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        const response = blockBlobClient.uploadFile(tempFilePath);
        console.log("File uploaded to Azure");
    } catch (error) {
        console.log(error);
        throw error;
    }
};
