import React from 'react';
import { Card, CardBody, Image } from '@nextui-org/react';

interface CardContentProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    radioName: string;
}

const CardContent: React.FC<CardContentProps> = ({
    imageUrl,
    title,
    subtitle,
    radioName,
}) => {
    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[600px]"
            shadow='sm'
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-4">
                        <Image
                            alt="Album cover"
                            className="object-cover"
                            shadow="md"
                            src={imageUrl}
                            width="100%"
                            height={300}
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-8">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h3 className="font-semibold text-foreground/90">{title}</h3>
                                <p className="text-small text-foreground/80">{subtitle}</p>
                                <h1 className="text-large font-medium mt-2">{radioName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

export default CardContent;
