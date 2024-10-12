import { PropsWithChildren } from 'react';
import { DragDropContext, Draggable, Droppable, OnDragEndResponder } from 'react-beautiful-dnd';
import { UserLinks } from '@/models/api/userLink';
import { reorderUserLinks } from '@/utils/array';
import { PLATFORMS_NAME } from '@/utils/constant';
import LinkInput from './Form/LinkInput';

interface LinkInputDndSectionProps extends PropsWithChildren {
    links: UserLinks[];
    onChange: (newList: UserLinks[]) => void;
    onPlatfromName: (
        inx: number,
        value: (typeof PLATFORMS_NAME)[keyof typeof PLATFORMS_NAME],
    ) => void;
    onPlatfromUrl: (inx: number, value: string) => void;
    onRemove: (inx: number) => void;
    errors: Record<string, Record<string, Record<'message', string>>>;
}

export default function LinkInputDndSection({
    links,
    onChange,
    onPlatfromName,
    onPlatfromUrl,
    onRemove,
    errors,
}: LinkInputDndSectionProps) {
    const onDragEnd: OnDragEndResponder = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        const reorderedLinks = reorderUserLinks(links, source.index, destination.index);
        onChange(reorderedLinks);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {links.map((link, index) => (
                            <Draggable key={link.id} draggableId={link.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <LinkInput
                                            index={index}
                                            link={link}
                                            onPlatfromName={onPlatfromName}
                                            onPlatfromUrl={onPlatfromUrl}
                                            onRemove={onRemove}
                                            error={errors?.[index]}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
